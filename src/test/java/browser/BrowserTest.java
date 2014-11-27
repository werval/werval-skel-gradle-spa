package browser;

import org.fluentlenium.adapter.FluentTest;
import org.junit.ClassRule;
import org.junit.Test;
import org.qiweb.test.QiWebHttpRule;

// This test use FluentLenium for browser assertions
// See https://github.com/FluentLenium/FluentLenium
public class BrowserTest
    extends FluentTest
{
    // This runs your QiWeb Application in a Netty Server around all tests of this class
    @ClassRule
    public static final QiWebHttpRule QIWEB = new QiWebHttpRule();

    @Override
    public String getDefaultBaseUrl()
    {
        return QIWEB.baseHttpUrl();
    }

    @Test
    public void spa()
    {
        goTo( "http://localhost:23023/" );
        await().until( "#spa" ).containsText( "Hello" );
    }
}
