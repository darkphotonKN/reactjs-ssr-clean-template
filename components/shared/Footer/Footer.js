import React from 'react';
import Link from 'next/link';

import AnchorLink from 'react-anchor-link-smooth-scroll';

const Footer = () => {
  return (
    <React.Fragment>
      <section className="wave">
        <img
          src="/static/img/home/footer_wave_1.png"
          width="110%"
          alt="bg-footer"
          className="wave-one"
        />
        <img
          src="/static/img/home/footer_wave_2.png"
          width="100%"
          alt="bg-footer"
          className="wave-two"
        />
      </section>
      <footer>
        <section className="footer-middle-mobile py-4">
          <div className="container">
            <div className="row">
              <div className="col-6 text-center py-3">
                <Link href="/policy/data-disclosure">
                  <a>資料開放宣告</a>
                </Link>
              </div>
              <div className="col-6 text-center py-3">
                <Link href="/policy/information-security-policy">
                  <a>資訊安全政策宣告</a>
                </Link>
              </div>
              <div className="col-12 text-center py-3">
                <Link href="/policy/privacy-policy">
                  <a>隱私權政策宣告</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>北區水資源局(局本部)</h3>
                <p>
                  地址：32547 桃園市龍潭區佳安里佳安路2號
                  <br />
                  電話：03-4712001 免付費電話：0800-200233
                </p>

                <h3>寶山第二水庫管理中心</h3>
                <p>
                  電話：03-5805729
                  <br />
                  地址：331444 新竹縣北埔鄉埔尾村埔尾34之8號
                </p>
              </div>

              <div className="col-md-3 text-right section-bottom">
                <img src="/static/img/gov.png" alt="gov" className="gov-img" />
                <img
                  src="/static/img/icons/accessibility.jpg"
                  alt="access"
                  className="access-img"
                />
              </div>

              <div className="col-md-3 text-right mt-3 section-bottom">
                <Link href="/policy/information-security-policy">
                  <a className="btn-transparent">資訊安全政策宣告</a>
                </Link>
                <Link href="/policy/data-disclosure">
                  <a className="btn-transparent">資料開放宣告</a>
                </Link>
                <Link href="/policy/privacy-policy">
                  <a className="btn-transparent">隱私權政策宣告</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-bottom-mobile">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src="/static/img/gov.png" alt="gov" className="gov-img" />
                <img
                  src="/static/img/icons/accessibility.jpg"
                  alt="access"
                  className="access-img"
                />
              </div>
            </div>
          </div>
        </section>

        <AnchorLink id="return-top" href="#header-bar" title="top 回到最上方">
          <span className="backtop">
            <h4>Top</h4>
          </span>
        </AnchorLink>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
