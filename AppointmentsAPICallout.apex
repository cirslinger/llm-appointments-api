public class AppointmentsAPICallout {
    
    @InvocableMethod(label='Get User Appointments' 
                     description='Calls the Appointments API to get upcoming appointments by user ID'
                     category='API')
    public static List<AppointmentsResponse> getAppointments(List<AppointmentsRequest> requests) {
        List<AppointmentsResponse> responses = new List<AppointmentsResponse>();
        
        for (AppointmentsRequest request : requests) {
            AppointmentsResponse response = new AppointmentsResponse();
            
            try {
                HttpRequest req = new HttpRequest();
                req.setEndpoint('https://llm-appointments-api.onrender.com/api/appointments');
                req.setMethod('POST');
                req.setHeader('Content-Type', 'application/json');
                req.setBody('{"userId":"' + request.userId + '"}');
                req.setTimeout(60000);
                
                Http http = new Http();
                HTTPResponse res = http.send(req);
                
                if (res.getStatusCode() == 200) {
                    // Parse the JSON response
                    Map<String, Object> jsonResponse = (Map<String, Object>) JSON.deserializeUntyped(res.getBody());
                    
                    response.success = true;
                    response.userId = (String) jsonResponse.get('userId');
                    response.userName = (String) jsonResponse.get('userName');
                    
                    // Parse appointments array
                    List<Object> appointmentsList = (List<Object>) jsonResponse.get('appointments');
                    response.appointmentCount = appointmentsList.size();
                    
                    // Create a simplified appointments string for display
                    List<String> appointmentSummaries = new List<String>();
                    for (Object aptObj : appointmentsList) {
                        Map<String, Object> apt = (Map<String, Object>) aptObj;
                        String summary = (String) apt.get('date') + ' at ' + (String) apt.get('time') + 
                                       ' - ' + (String) apt.get('provider') + ' (' + (String) apt.get('specialty') + ')';
                        appointmentSummaries.add(summary);
                    }
                    response.appointmentsSummary = String.join(appointmentSummaries, '\n');
                    
                    // Store the full JSON for processing
                    response.rawResponse = res.getBody();
                    
                } else if (res.getStatusCode() == 404) {
                    response.success = false;
                    response.errorMessage = 'No user found with the provided userId';
                    response.rawResponse = res.getBody();
                } else {
                    response.success = false;
                    response.errorMessage = 'API Error: ' + res.getStatusCode();
                    response.rawResponse = res.getBody();
                }
                
            } catch (Exception e) {
                response.success = false;
                response.errorMessage = 'Exception: ' + e.getMessage();
            }
            
            responses.add(response);
        }
        
        return responses;
    }
    
    // Input wrapper class
    public class AppointmentsRequest {
        @InvocableVariable(label='User ID' description='The user ID to get appointments for' required=true)
        public String userId;
    }
    
    // Output wrapper class
    public class AppointmentsResponse {
        @InvocableVariable(label='Success' description='Whether the API call was successful')
        public Boolean success;
        
        @InvocableVariable(label='User ID' description='The user ID')
        public String userId;
        
        @InvocableVariable(label='User Name' description='The name of the user')
        public String userName;
        
        @InvocableVariable(label='Appointment Count' description='Number of upcoming appointments')
        public Integer appointmentCount;
        
        @InvocableVariable(label='Appointments Summary' description='Summary of all appointments')
        public String appointmentsSummary;
        
        @InvocableVariable(label='Error Message' description='Error message if call failed')
        public String errorMessage;
        
        @InvocableVariable(label='Raw Response' description='Raw JSON response from API (contains full appointment details)')
        public String rawResponse;
    }
}
