


const scriptsInEvents = {

		async Game_over_events_Event1_Act3(runtime, localVars)
		{
			console.log(runtime.globalVars.Score);
			TelegramGameProxy.shareScore(runtime.globalVars.Score);
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

