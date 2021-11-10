export class TransaccionGenericaVO
	{		
		constructor(
            public numTransaccion?: string,
            public transaccion?: string,
            public usuario?: string,
            public fechaSis?: Date,
            public sucOrigen?: string,
            public sucDestino?: string,
            public modulo?: string
        )
		{}
	}