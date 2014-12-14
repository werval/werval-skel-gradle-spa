package http;

import org.junit.ClassRule;
import org.junit.Test;
import io.werval.test.WervalHttpRule;

import static com.jayway.restassured.RestAssured.expect;
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
        expect()
            .statusCode( 200 )
            .contentType( "application/json" )
            .body( "message", equalTo( "Hello World!" ) )
            .when()
            .get( "/greeting/World" );
    }
}