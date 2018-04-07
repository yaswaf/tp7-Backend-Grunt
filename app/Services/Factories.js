personApi.factory("getPersons", function($resource) {
	 return $resource(
      '/rest/person/all',
     // { method: 'getTask', q: '*' }, // Query parameters
      {'query': { method: 'GET', isArray: false }}
    );
});

personApi.factory("savePerson", function($resource) {
	return $resource("/rest/person/save",
    {},
    {
        save: {
            method: 'POST'
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }
    );
	
	
});

