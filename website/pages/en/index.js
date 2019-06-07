/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    return (
        <div className="home jumbotron text-center gap">
          <div className="inner">
            <h1>{"ProximaX " + siteConfig.title}</h1>
            <p>Start integrating ProximaX into your application.</p>
            <div className="image-container">
              <img src={`${baseUrl}img/nem-developers.png`} />
            </div>
          </div>
        </div>
    );
  }
}

class BriefDef extends React.Component{
  render(){

    return (
      <section className="container text-center">
        <div className="briefDef ">
          <p>
            ProximaX Sirius is a <strong>developer-friendly blockchain platform</strong>. 
            The latest ProximaX version, Catapult, gives you direct access 
            to a specialized set of <strong>tested</strong> and <strong>secure on-blockchain features</strong> 
            using your favourite <strong>programming language</strong>.
          </p>
        </div>
      </section>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const CardBlock_twoColumn = props => (
      <Container
        id={props.id}
        background={props.background}>
        <RenderCards cardsData={props.children} />
      </Container>
    );

    const RenderCards = (cardProps) => {

      const cards = cardProps.cardsData
        .map(cardInfo => (
          <a className="blockElement alignCenter imageAlignTop twoByGridBlock" href={cardInfo.link} key={cardInfo.link} >
              <div className="card">
                <div className="blockImage">
                  <img src={cardInfo.image} />
                </div>
                <div className="blockContent">
                  <h2>
                    <div>
                      <p>{cardInfo.title}</p>
                    </div>
                  </h2>
                  <div>
                    <p>{cardInfo.content}</p>
                  </div>
                </div>
              </div>
          </a>
        ));

        return (
          <div className="gridBlock card-container">{cards}</div>
        );
    }

    const Cards_firstRow = () => (
      <CardBlock_twoColumn>
        {[
          {
            content: 'Install the development kit and start coding your first blockchain app.',
            image: `${baseUrl}img/home-getting-started.png`,
            imageAlign: 'top',
            link: `${baseUrl + docsUrl}/getting-started/setting-up-workstation`,
            title: 'Getting started',
          },
          {
            content: 'Easy-to-follow step by step guides with code examples.',
            image: `${baseUrl}img/home-guides.png`,
            imageAlign: 'top',
            link: `${baseUrl + docsUrl}/guides/account/account-overview`,
            title: 'Guides',
          },
        ]}
      </CardBlock_twoColumn>
    );

    const Cards_SecondRow = () => (
      <CardBlock_twoColumn>
      {[
        {
          content: 'Architecture your solution connecting the features that make up the Smart Asset System.',
          image: `${baseUrl}img/home-built-in-features.png`,
          imageAlign: 'top',
          link: `${baseUrl + docsUrl}/built-in-features/account`,
          title: 'Built-in Features',
        },
        {
          content: 'From SDKs to extensions that make blockchain development easier.',
          image: `${baseUrl}img/home-references.png`,
          imageAlign: 'top',
          link: `${baseUrl}references`,
          title: 'References',
        },
      ]}
      </CardBlock_twoColumn>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <BriefDef language={language} />
        <div className="mainContainer">
          <Cards_firstRow />
          <Cards_SecondRow />
        </div>
      </div>
    );
  }
}

module.exports = Index;
