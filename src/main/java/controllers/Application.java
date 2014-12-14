package controllers;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.werval.api.outcomes.Outcome;

import static io.werval.api.context.CurrentContext.*;
import static io.werval.modules.json.JSON.*;

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
