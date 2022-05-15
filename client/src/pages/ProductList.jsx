import styled from "styled-components";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ display:"flex",flexDirection:"column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
     
      <Title>PRODUCT</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              COLOR
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
            MARK
            </Option>
            <Option>XX1</Option>
            <Option>XX2</Option>
            <Option>XX3</Option>
            <Option>XX4</Option>
            <Option>XX5</Option>
          </Select>
          <Select>
            <Option disabled selected>
            PRICE (TND)
            </Option>
            <Option>9</Option>
            <Option>20</Option>
            <Option>100</Option>
            <Option>500</Option>
            <Option>1000</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>THE MOST REQUESTED</Option>
            <Option>NEW ARRIVAL</Option>
            <Option>PRICE (ASC)</Option>
            <Option>PRICE (DESC)</Option>
            <Option>TOP RATED</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;