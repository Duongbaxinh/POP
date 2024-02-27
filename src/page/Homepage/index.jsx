import dataLive from "@/assets/data/dataLive";
import LiveStream from "@/components/molecule/LiveStream";
import BanerSlide from "../../components/molecule/BanerSlide"
import NewPhim from "@/components/molecule/NewFilm";
import Pop from "@/components/molecule/Pop";
import ShopItem from "@/components/molecule/ShopItem";
import Top from "@/components/molecule/Top";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { reduxAction } from "../../constant/reduxAction";
import movieAction from "../../redux/action";

function Hompage(props) {
  const { data: dataSeri } = useFetch('GET', 'http://localhost:8080/api/v1/seris')
  const { data: dataMovie } = useFetch('GET', 'http://localhost:8080/api/v1/movies')
  const dispatch = useDispatch()
  dispatch(movieAction.fetchDataSuccess(dataMovie))
  useEffect(() => {

    dispatch(movieAction.fetchDataMovie())
    const fetchMovies = async () => {
      const { data } = await axios.get('http://localhost:8080/api/v1/movies')
      console.log('ddddddddddddddddddd', data.response)
      dispatch({ type: reduxAction.FETCH_DATA_SUCCESS, payload: data.response })
    }
    fetchMovies()
  }, [])
  const [translate, setTranslate] = useState(0);
  const handleTranslateRight = () => {
    setTranslate(translate - 1183);
  };
  const handleTranslateleft = () => {
    if (translate < 0) {
      setTranslate(translate + 1183);
    }
  };
  return (
    <div>
      <BanerSlide
        handleTranslateRight={handleTranslateRight}
        handleTranslateleft={handleTranslateleft}
        translate={translate}
        data={dataSeri}
      />
      <LiveStream data={dataLive} />
      <ShopItem />
      <NewPhim data={dataMovie} />
      <Pop
        title={"Pop Đề Cử"}
        imageURL={
          "https://res.cloudinary.com/dwu92ycra/image/upload/v1680582045/POP/POP_mrpdxg.webp"
        }
        name={"Thám Tử Lừng Danh Conan: Nàng Dâu Halloween - Tập full"}
        release_year={2020}
        time={12}
      />
      <Top data={dataMovie} />
    </div>
  );
}

export default Hompage;
