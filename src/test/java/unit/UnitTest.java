package unit;

import org.junit.Test;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

public class UnitTest
{
    @Test
    public void test42()
    {
        assertThat( 42, is( 42 ) );
    }

    @Test
    public void test23()
    {
        assertThat( 23, is( 23 ) );
    }
}
