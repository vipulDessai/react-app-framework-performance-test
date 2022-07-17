import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import Script from 'next/script';

const urlLodash =
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script src={urlLodash} strategy="beforeInteractive"></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
