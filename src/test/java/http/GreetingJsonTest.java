package http;

import org.junit.ClassRule;
import org.junit.Test;
import io.werval.test.WervalHttpRule;

import static com.jayway.restassured.RestAssured.when;
import static org.hamcrest.Matchers.equalTo;

// This test use rest-assured for HTTP/JSON assertions
// See https://code.google.com/p/rest-assured/
public class GreetingJsonTest
{
    // This runs your Werval Application in a Netty Server around all tests of this class
    @ClassRule
    public static final WervalHttpRule WERVAL = new WervalHttpRule();

    @Test
    public void greetingJsonTest()
    {
        when().get( "/greeting/World" )
            .then().statusCode( 200 )
            .and().contentType( "application/json" )
            .and().body( "message", equalTo( "Hello World!" ) );
    }
}
