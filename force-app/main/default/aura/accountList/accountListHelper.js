({
	updateCount : function(component, event, helper) {
		var action = component.get("c.doUpdateCount");
		action.setCallback(this, function(result) {
			var state = result.getState();
			if(state == "SUCCESS"){
				component.set("v.firstNumber",result.getReturnValue().length);
				component.set("v.accountList",result.getReturnValue());
			}else{
				console.log("Error");
			}
	});
	$A.enqueueAction(action);
	}
})