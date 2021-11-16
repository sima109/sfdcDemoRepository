public class ApexClassController {
	@AuraEnabled
    public static List<Account> doUpdateCount(){
        return [select Id, Name from account];
    }
    
    @AuraEnabled
    public static void doSave(Account acc){
        try{
            upsert(acc);
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
        
    }
}