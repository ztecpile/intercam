export class ParametrosIWSPVO {
    public tcoCuenta : string;
    public tcoCliUsu : string;
    public tipConsul : string;
    public tmuClient : string; 
    public corUsuario : string;
    public usuFolNip : number;
    public corCuenta : string;
    public corCliUsu : string;
    
    public corAlias  : string;
    public corStatus : string;
    public corMoLiDi : number;
    public corOrigen : string;
    public corTipAcc : string;

    public usuSucMod : string;
    public corMoneda : string;
    public corUsuari : string;
    
    ////////////////////////////Consulta Bitacora BE ////////////////////////////////////////
    
    public bitUsuario : string;
    public bitFecha   : string;
    public bitFecFin : string;
    public bitFechaDate : Date;
    public bitFecFechaDate : Date;
    
    ///////Bitacora His
    public hbitFecha : string;
    public hbitFecFin : string;
    public hbitFechaDate : Date;
    public hbitFecFechaDate : Date;
    
    public montoMin : number;
    public montoMax : number;
    public tipoOperacion : string;
    
    public speiUsuario : string;
    public speiFecha : string;
    
    public speiStatus : string;
    public speiDescrip : string;
    public speiOrdPag : string;
    public speiTipAct : string;
    
    public speiNumero : string;
    public speiNumTra : string;
    public speiCuenta : string;
    public speiConsul : string;
    
    public bauClient : string;
    public bauUsuari : string;
    
    //////////////////////////// Blokeo Token ////////////////////////////////////////
    
    public tokIdent  : number;
    public tokUsuari : string;
    public tokComent : string;
    public tokNegoci : string;
    public tokUsuSam : string;
    public tokStatus : string;
    public tokTipTok : number;
    public transaccio: string;
    public numTransac: string;
    
    public tokNoseri : string;
    public tokCodAct : string;
    
    public usuario   : string;
    public usuNombre : string;
    public tipToken : string;
    
    public sucOrigen : string;
    public sucDestino: string;
    
    public tmuUsuari : string;
    public tmuNombre : string;
    public tmuNumero : number;
    public tmuClave  : string;
    public tmuEmail  : string;
    public tmuFecAlt : string;
    public tmuFeUIMO : string;
    public tmuFecAltDate : Date;
    public tmuFeUIMODate : Date;
    
    public tmuFolTok : string;
    public tmuSucMod : string;
    public tmuStaUsu : string;
    public tmuStatus : string;
    
    public usuClient : string;
    public client : string;
    
    //////Bitacora Token //////////////////
    
    public bauSucurs : string;
    public bauFecha  : string;
    public bauFechaDate : Date;
    public bauFecFin : string;
    public bauFecFinDate : Date;
    public bauTipOpe : number;
    public bauRefere : string;
    public bauDireIP : string;
    public bauPlaMod : string;
    public bauOperac : number;
    
    /////////// Valida Token /////////////////
    
    public tstNumero : number;
    public tstTmpCli : string;
    public tstTmpUsu : number;
    public tstTelefo : string;
    public tstTokSer : string;
    public tstTipTok : string;
    public tstStatus : string;
    
    //////////// Validacion Folio //////////////
    
    public folFolio : number;
    
    public folStatus : string;
    public tipActual : string;
    
    ////////////////Autorizacion Pendiente ///////////////
    
    public oauNumero : number;
    public oauClient : string;
    public oauTmpUsu : number;
    public oauUsuari : string;
    
    public oauTmAdAn : number;
    public oauUsAdAn : string;
    public oauFolNip : number;
    public oauCuenta : string;
    public oauCuCaAn : string;
    public oauFecAlt : string;
    public oauFeUIMo : string;
    public oauFecAltDate : Date;
    public oauFeUIMoDate : Date;
    
    public oauOperac : number;
    public oauStatus : string;
    
    ////////////////// Chequera //////////////
    
    public tmpTmpUsu : number;
    public tmpUsuari : string;
    public tmpAdmChe : string;
    
    ////////////////// Param Usu ////////////////
    
    public tpuTmpUsu : number;
    public tpuUsuari : string;
    public tpuTipAcc : string;
    public tpuConCue : string;
    public tpuAltCue : string;
    public tpuCarCue : string;
    public tpuSolici : string;
    public tpuAutori : string;
    public tpuNivFir : string;
    
    ////////////////////// Cuenta Origen //////////////////
    
    public tcoNumero : number;
    public tcoConsec : string;
    public tcoTmpUsu : number;
    public tcoUsuari : string;
    public tcoClient : string;
    public tcoStCuOr : string;
    public tcoAlias : string;
    public tcoMoLiDi : number;
    public tcoFecAlt : string;
    public tcoFeUIMo : string;
    public tcoFecAltDate : Date;
    public tcoFeUIMoDate : Date;
    public tcoStatus : string;
    
    //////////////////////Tarjeta Temporal////////////////////
    
    public ttbNumero : number;
    public ttbConsec : string;
    public ttbTmpUsu : number;
    public ttbUsuari : string; 
    public ttbTarjet : string;
    public ttbClient : string;
    public ttbCliUsu : string;
    public ttbStTaBr : string;
    public ttbAlias : string;
    public ttbFecAlt : string;
    public ttbFeUIMo : string;
    public ttbFecAltDate : Date;
    public ttbFeUIMoDate : Date;
    public ttbStatus : string;
    
    public usuNumero : string;
    public usuUsuAdm : string;
    public usuCuCaCo : string;
    public usuClave  : string;
    public usuPassWo : string;
    public usuSeguro : string;
    public usuTipo   : string;
    public usuOrigen : string;
    public usuTipSer : string;
    public usuStatus : string;
    public usuFolTok : string;
    public usuStaTok : string;
    public usuEmail  : string;
    public usuFeUIAc : Date;
    public usuFeAcPa : Date;
    public usuFecAlt : Date;
    public usuFecCan : Date;
    public usuMotCan : string;
    public usuCoAcNe : number;
    public usuStaSes : string;
    public usuCoDeNe : number;
    public usuCoPaNe : number;
    public usuSucOri : string;
    
    public pauUsuari : string;
    public pauOpMeHa : string;
    public pauImaSeg : string;
    public pauFraSeg : string;
    public pauPanIni : string;
    public pauPrPrSe : string;
    public pauPrReSe : string;
    public pauSePrSe : string;
    public pauSeReSe : string;
    public pauTePrSe : string;
    public pauTeReSe : string;
    public pauCuPrSe : string;
    public pauCuReSe : string;
    public pauQuPrSe : string;
    public pauQuReSe : string;
    public pauArMeHa : string;
    public pauTipAcc : string;
    public pauConCue : string;
    public pauAltCue : string;
    public pauCarCue : string;
    public pauSolici : string;
    public pauAutori : string;
    public pauNivFir : string;
    public pauUIPrSe : string;
    
    public tccUsuari : string;
    public tccTarjet : string;
    public tccClient : string;
    public tccCliUsu : string;
    public tccAlias  : string;
    public tccStatus : string;
    public pClave : string;
    
    public modulo : string;
    
    public amLimUsu : string;
    
    public cdbConsec : string;
    public cdbUsuAdm : string;
    public cdbCuenta : string;
    public cdbCliUsu : string;
    public cdbAlias : string;
    public cdbRFCBen : string;
    public cdbEmaBen : string;
    
    public cdbFecAlt : string;
    public cdbFecCan : string;
    public cdbFecAct : string;
    
    public cdbFecAltDate : Date;
    public cdbFecCanDate : Date;
    public cdbFecActDate : Date;

    public cdbRandom : string;
    public cdbStatus : string;
    public patStatus : string;
    public cdbMinRes : number;
    public cliComOrd : string;
    public patCodigo : string;
    public patConsec : number;
    
    public cdsUsuAdm : string;
    public cdsConsec : string;
    public cdsCuenta : string;
    public cdsBanco : string;
    public banNomCor : string;
    public cdsCliUsu : string;
    public cdsStatus : string;
    public cdsAlias : string;
    public cdsRFCBen : string;
    public cdsEmaBen : string;
    public cdsInicia : string;
    
    public cdsFecAlt : string;
    public cdsFecCan : string;
    public cdsFecAltDate : Date;
    public cdsFecCanDate : Date;
    
    public cdsDesAdi : string;
    
    public cdsFecAct : string;
    public cdsFecActDate : Date;
    
    public cdsMinRes : number;
    public cdsRandom : string;
    public cdsCLABE : string;
    
    ///////////////////////////////////////////////////////////
    
    public cdpUsuAdm : string;
    public cdpConsec : string;
    public cdpCuenta : string;
    public cdpBanco : string;
    public cdpCliUsu : string;
    public cdpStatus : string;
    public cdpAlias : string;
    public cdpRFCBen : string;
    public cdpEmaBen : string;
    
    public cdpFecAlt : string;
    public cdpFecCan : string;
    public cdpFecAltDate : Date;
    public cdpFecCanDate : Date;
    
    public cdpDesAdi : string;
    
    public cdpFecAct : string;
    public cdpFecActDate : Date;
    
    public cdpMinRes : number;
    
    ////////////////////////////////////////////////////////////
    
    public cdiConsec : string;
    public cdiUsuAdm : string;
    public cdiCuenta : string;
    public cdiCliUsu : string;
    
    public cdiNomBen : string;
    public cdiUtBaln : string;
    public cdiIntABA : string;
    public cdiIntSwi : string;
    public cdiIntCue : string;
    public cdiIntNom : string;
    public cdiIntPla : string;
    public cdiBenAba : string;
    public cdiBenSwi : string;
    public cdiBenCue : string;
    public cdiBenNom : string;
    public cdiBenPla : string;
    public cdiBenRef : string;
    public cdiMoneda : string;
    public cdiCuDeEs : string;
    public cdiStatus : string;
    
    public cdiFecAlt : string;
    public cdiFecCan : string;
    public cdiFecAct : string;
    
    public cdiEmaBen : string;
    public cdiMinRes : number;
    public tipStaAct : string;
    
    ///////////////////////////////////////////////
    
    public adm : string;
    public usuari : string;
    public tipTar : string;
    public tarjet : string;
    public alias : string;
    public emaBen : string;
    public nomTit : string;
    public monMax : number;
    public random : string;
    public consec : string;
    
    ///////////////////////////////////////////////
    
    public tipTel : string;
    public telefo : string;
    public telParent : string;
    public telValCel : string;
    public telCel : string;
    
    public sfhNumero : string;
    ///////////////////////////////////////////////
    
    public tipProces : string;
    public autPend : [];
    public reactivarCuOr: Boolean;
    
    public priRef : string;
    public segRef : string;
    public direIP : string;
    public telContID : number;
    public telSucurs : string;
    public telEmail : string;
    
    public cliSucurs : string;
    public cliNombre : string;
    public numCli : string;
    public perNumero : string;

}