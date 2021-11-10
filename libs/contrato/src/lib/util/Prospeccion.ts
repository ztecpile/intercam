import { ContratoFolderFondosVO, EjecutivoSucursalVO, PersonaContratoVO, PersonaFisicaVO, PersonaVO, ProspeccionPersonaVO, TipoContratoVO, UsuarioVO } from "@intercam/model";

export class Prospeccion {

    /**
	* Almacena la modalidad
	**/
	public modalidad:string;

    /**
	* Almacena datos Persona.
	**/
	public persona:PersonaVO;
		
	/**
	* Almacena conjunto de argumentos.
	**/
	public argumentos:[];
        
    /**
    * Alamacena datos de la persona Fisica
    **/ 
    public personaFisica:PersonaFisicaVO;
        
    /**
    * Valida si es asistente
    **/
        
    public  soyAsistenteId:Number;
        
    /**
    * Guarda la Clave del Pais
    */
    public paisClave:Number;
        
        
    public isBuscaPros :Boolean;
        
    /**
    * Almacena ContratoFondosFolder
    **/
    public folder:ContratoFolderFondosVO;
        
    /**
    * Almacena la relacion Ejecutivo con su cco, region, sucursal, subarea
    */ 
    public ejecutivoSucursalVO:EjecutivoSucursalVO;
        
    /**
    * Almacena las credenciales del usuario al cual se le asignara el prospecto
    * , ya que el usuario en sesion puede ser un asistente
    */ 
    public promotorProspecta : UsuarioVO;

    /**
    * Almacena el usuario en sesion
    */ 
    public usuarioSesion : UsuarioVO;

    public  contratoPersonaVO:PersonaContratoVO;

    public tipoContratoVO:TipoContratoVO;

    public prospectoSeleccionado : ProspeccionPersonaVO;

    public personaDuenioCte:PersonaVO;
}