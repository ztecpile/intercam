import { AbstractControl, ValidatorFn } from "@angular/forms";

export class EmailValidator {
    public static readonly DISALLOWED_LOCALNAME_CHARS:string = "()<>,;:\\\"[] `~!#$%^&*={}|/?'";
    public static readonly DISALLOWED_DOMAIN_CHARS:string ="()<>,;:\\\"[] `~!#$%^&*+={}|/?'";

    //validador para el correo
    public static validatorEmail(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean} | null => {
            var emailStr:string = control.value;
      		var username:string = "";
      		var domain:string = "";
      		var i:number;
    
            //valida si tiene @
      		var ampPos:number = emailStr.indexOf("@");
      		if(ampPos == -1){
      			return { 'missingAtSign': true };
      		}
            //valida si tiene mas de un @
            else if(emailStr.indexOf("@", ampPos + 1) != -1){ 
                return { 'tooManyAtSigns': true };
    		}
          
            username = emailStr.substring(0, ampPos);
    		domain = emailStr.substring(ampPos + 1);
            var usernameLen:number = username.length;
            //valida si existe usuario
    		if(usernameLen == 0){
                return { 'missingUsername': true };
    		}
    
            for(i = 0; i < usernameLen; i++){
      		    if(this.DISALLOWED_LOCALNAME_CHARS.indexOf(username.charAt(i)) != -1){
                  return { 'invalidChar': true };
      			}
    		}
    
            var domainLen:number = domain.length;
            //comprobar la dirección IP
      		if((domain.charAt(0) == "[") && (domain.charAt(domainLen - 1) == "]")){
      			// Validar dirección IP
      			if(!this.isValidIPAddress(domain.substring(1, domainLen - 1))){
                  return { 'invalidIPDomain': true };
      			}
      		} else {
                //valida si tiene el punto
      			var periodPos:number = domain.indexOf(".");
      			var nextPeriodPos:number = 0;
      			var lastDomain:string = "";
    
                if(periodPos == -1){
                    return { 'missingPeriodInDomain': true };
        		}
        
                while(true){
          			nextPeriodPos = domain.indexOf(".", periodPos + 1);
          			if(nextPeriodPos == -1){
          				lastDomain = domain.substring(periodPos + 1);
          				if(lastDomain.length != 3 &&
          					lastDomain.length != 2 &&
          					lastDomain.length != 4 &&
          					lastDomain.length != 6){
                                  return { 'invalidDomain': true };
          				}
          				break;
          			}
          			else if(nextPeriodPos == periodPos + 1){
                          return { 'invalidPeriodsInDomain': true };
          			}
                      periodPos = nextPeriodPos;
          		}
        
                //valida los caracteres de dominio
          		for(i = 0; i < domainLen; i++){
          			if(this.DISALLOWED_DOMAIN_CHARS.indexOf(domain.charAt(i)) != -1){
                        return { 'invalidChar': true };
          			}
          		}
        
                //valida que despues de @ no contenga un .
          		if(domain.charAt(0) == "."){
          			return { 'invalidDomain': true };
          		}
            }
          return null;
        };
    }

    /**
	 * Valida la direccion IP
	 * 
	 * If IP domain, then must follow [x.x.x.x] format
	 * or for IPv6, then follow [x:x:x:x:x:x:x:x] or [x::x:x:x] or some
	 * IPv4 hybrid, like [::x.x.x.x] or [0:00::192.168.0.1]
	 *
	 */ 
     private static isValidIPAddress(ipAddr:string): boolean{
		var ipArray:any[] = [];
		var pos:number = 0;
		var newpos:number = 0;
		var item:number;
		var n:number;
		var i:number;
		
		// if you have :, you're in IPv6 mode
		// if you have ., you're in IPv4 mode
		if (ipAddr.indexOf(":") != -1){
			// IPv6
			
			// validate by splitting on the colons
			// to make it easier, since :: means zeros, 
			// lets rid ourselves of these wildcards in the beginning
			// and then validate normally
			
			// get rid of unlimited zeros notation so we can parse better
			var hasUnlimitedZeros:Boolean = ipAddr.indexOf("::") != -1;
			if (hasUnlimitedZeros){
				ipAddr = ipAddr.replace(/^::/, "");
				ipAddr = ipAddr.replace(/::/g, ":");
			}
			
			while(true){
				newpos = ipAddr.indexOf(":", pos);
				if(newpos != -1){
					ipArray.push(ipAddr.substring(pos,newpos));
				} else {
					ipArray.push(ipAddr.substring(pos));
					break;
				}
				pos = newpos + 1;
			}
			
			n = ipArray.length;
			
			const lastIsV4:Boolean = ipArray[n-1].indexOf(".") != -1;
			
			if(lastIsV4){
				// if no wildcards, length must be 7
				// always, never more than 7
				if((ipArray.length != 7 && !hasUnlimitedZeros) || (ipArray.length > 7))
					return false;
	
				for(i = 0; i < n; i++){
					if(i == n-1){
						// IPv4 part...
						return this.isValidIPAddress(ipArray[i]);
					}
					
					item = parseInt(ipArray[i], 16);
					
					if(item != 0)
						return false;
				}
			} else {
				// if no wildcards, length must be 8
				// always, never more than 8
				if((ipArray.length != 8 && !hasUnlimitedZeros) || (ipArray.length > 8))
					return false;
				
				for(i = 0; i < n; i++){
					item = parseInt(ipArray[i], 16);
					
					if(isNaN(item) || item < 0 || item > 0xFFFF)
						return false;
				}
			}
			
			return true;
		}
			
		if(ipAddr.indexOf(".") != -1){
			// IPv4
			// validate by splling on the periods
			while(true){
				newpos = ipAddr.indexOf(".", pos);
				if(newpos != -1){
					ipArray.push(ipAddr.substring(pos,newpos));
				}
				else {
					ipArray.push(ipAddr.substring(pos));
					break;
				}
				pos = newpos + 1;
			}
			
			if(ipArray.length != 4)
				return false;

			n = ipArray.length;
			for (i = 0; i < n; i++){
				item = Number(ipArray[i]);
				if(isNaN(item) || item < 0 || item > 255)
					return false;
			}
			
			return true;
		}
		
		return false;
	}
}