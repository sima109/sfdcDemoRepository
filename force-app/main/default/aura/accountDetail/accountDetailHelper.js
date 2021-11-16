({
	save : function(component, event, helper) {
		var action = component.get("c.doSave");
		action.setParams({
			"acc":component.get('v.account')
		});
		action.setCallback(this, function(response) {
			var state = response.getState();
			if(state == "SUCCESS"){
				console.log('El guardado ha funcionado');
				var appEvent = $A.get("e.c:UpdateAccountList");
				appEvent.fire();
			}else{
				console.log("Error");
			}
		});
		$A.enqueueAction(action);
	}
})