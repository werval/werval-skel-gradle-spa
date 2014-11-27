package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.qiweb.api.outcomes.Outcome;

import static org.qiweb.api.context.CurrentContext.*;
import static org.qiweb.modules.json.JSON.*;

public class Application
{
    public Outcome greeting( String name )
    {
        return outcomes().ok()
            .withBody( json().toJSON( new Message( "Hello " + name + '!' ) ) )
            .asJson()
            .build();
    }

    public static class Message
    {
        @JsonProperty
        String message;

        Message( String message )
        {
            this.message = message;
        }
    }
}
