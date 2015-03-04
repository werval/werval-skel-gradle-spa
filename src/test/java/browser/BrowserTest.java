package browser;

import org.fluentlenium.adapter.FluentTest;
import org.junit.ClassRule;
import org.junit.Test;
import io.werval.test.WervalHttpRule;

// This test use FluentLenium for browser assertions
// See https://github.com/FluentLenium/FluentLenium
public class BrowserTest
    extends FluentTest
{
    // This JUnit Rule runs your Werval Application in a Netty Server before all the tests below
    @ClassRule
    public static final WervalHttpRule WERVAL = new WervalHttpRule();

    @Override
    public String getDefaultBaseUrl()
    {
        return WERVAL.baseHttpUrl();
    }

    @Test
    public void spa()
    {
        goTo( "/" );
        await().until( "#spa" ).containsText( "Hello" );
    }
}
