import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            href="/"
            sizes="96x96"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/"
          />
          <link rel="shortcut icon" href="/"/>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/"
          />
          <link rel="manifest" href="/"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
