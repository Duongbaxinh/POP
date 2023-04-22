import React from "react";
import appstore from "../../assets/public/image/appstore.png";
import googleplay from "../../assets/public/image/googleplay.png";
import smartTV from "../../assets/public/image/smartTV.png";
import "./styles.scss";
Footer.propTypes = {};

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/icons/logo-pops.png?format=webp"
            className="footer__left-logo"
          />
          <p className="footer__left-des">
            Mạng xã hội chia sẻ các nội dung video giải trí chất lượng cao, phù
            hợp mọi độ tuổi và an toàn cho trẻ em.
          </p>
          <div className="footer__left-option">
            <img src={appstore} alt="" className="footer__left-item" />
            <img src={googleplay} alt="" className="footer__left-item" />
            <img src={smartTV} alt="" className="footer__left-item" />
          </div>
        </div>
        <div className="footer__main">
          <ul className="footer__main-item">
            <li>NỘI DUNG NGƯỜI LỚN</li>
            <li>Trang Chủ</li>
            <li>Truyện Tranh</li>
            <li>Originals</li>
            <li>Anime</li>
            <li>Show</li>
          </ul>
          <ul className="footer__main-item">
            <li></li>
            <li>Trang Chủ</li>
            <li>Truyện Tranh</li>
            <li>Originals</li>
            <li>Anime</li>
            <li>Show</li>
          </ul>
          <ul className="footer__main-item">
            <li>POPS KIDS</li>
            <li>Trang Chủ</li>
            <li>Truyện Tranh</li>
            <li>Originals</li>
            <li>Anime</li>
            <li>Show</li>
          </ul>
          <ul className="footer__main-item">
            <li>HỖ TRỢ</li>
            <li>Trang Chủ</li>
            <li>Truyện Tranh</li>
            <li>Originals</li>
            <li>Anime</li>
            <li>Show</li>
          </ul>
        </div>

        <ul className="footer__right">
          <li>CÔNG TY CỔ PHẦN PHONG PHÚ SẮC VIỆT</li>
          <li>
            Địa chỉ: Tầng 4, Block A, Viettel Complex Tower, 285 Cách Mạng Tháng
            Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
          </li>
          <li>Điện thoại: +84 (28) 62921652</li>
          <li>Email: popsapp-support@popsww.com</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>
          {" "}
          Người chịu trách nhiệm nội dung: Đinh Thị Hồng Hoa Giấy chứng nhận
          đăng ký kinh doanh số 0305709591 do Sở Kế hoạch và Đầu tư TP. Hồ Chí
          Minh cấp ngày 21/05/2008 Giấy phép thiết lập mạng xã hội số
          63/GP-BTTTT cấp bởi Bộ Thông tin & Truyền thông cấp ngày 22/02/2019 ©
          2018 POPS Worldwide. Mọi bản quyền thuộc về POPS Worldwide.{" "}
        </p>
        <span>
          <img
            src="https://cdn.popsww.com/popsapp/assets/images/icons/icon-verify.png?v=3"
            alt=""
          />
        </span>
      </div>
    </div>
  );
}

export default Footer;
