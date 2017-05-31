import React from 'react'

const API_URL = "http://cors-proxy.htmldriven.com/?url=http://infoshareacademycom.2find.ru";

import {Tabs, Tab, Table, Button, Col, Row, Glyphicon} from 'react-bootstrap'

class ProductWindow extends React.Component {
  state = {
    stock: null
  };

  componentWillMount() {
    fetch(
      API_URL + this.props.match.params.link
    ).then((response) => {
      return response.json();
    }).then((data) => {
      return JSON.parse(data.body).data;
    }).then((data) => {
        console.log('STOCK DATA POBRANE - ', data);
        this.setState({
          stock: data
        });
      }
    );
  }


  render() {
    return (
      <div align="center">
        <h2>Informacje o produkcie</h2>


        <Tabs defaultActiveKey={1} id="tabMenu">
          <Tab eventKey={1} title="Szczegółowe informacje ">
            {
              this.state.stock === null ? <p>'Pobieranie danych…' </p> :
                <div>
                  <Row>
                    <Col xs={6} className="text-center">
                      <Table striped bordered condensed hover>
                        <thead>

                        </thead>

                        <tbody>
                        <tr>
                          <th>Nazwa</th>
                          <td><p>{this.state.stock.part.data.brand}</p></td>
                        </tr>
                        <tr>
                          <th>Model</th>
                          <td><p>{this.state.stock.part.data.number}</p></td>
                        </tr>
                        <tr>
                          <th>Photo</th>
                          <img src={this.state.stock.part.jpg[0]} alt="No data"/>
                        </tr>
                        </tbody>

                      </Table>
                    </Col>

                    <Col xs={12} md={4}>
                      <tr>
                        <h3>nazwa produktu</h3>

                        <Button><h4>SKLEP</h4> <h6>(opcjonalnie)</h6></Button>
                      </tr>
                    </Col>
                  </Row>
                </div>
            }

          </Tab>
          <Tab eventKey={2} title="Dostawa i płatność">
            <ul class="c-tab-shipping-returns__list">

              <li>
                <h3 >Darmowa wysyłka od 150 zł!</h3>
                <p>UWAGA! Dla zamówień powyżej 150 zł nie musisz u nas płacić za wysyłkę!</p>
              </li>

              <li>
                <h3 class="o-heading__size4">Aż 30 dni na zwrot</h3>
                <p>Korzystając z oferowanego przez nas przedłużonego prawa do zwrotu, możesz zwrócić produkt nawet do
                  30 dni po zakupie.</p>
              </li>

              <li>
                <h3 class="o-heading__size4">Bezpłatny zwrot</h3>
                <p>My płacimy za zwroty. W związku z tym konieczność odesłania produktu nie oznacza dla Ciebie
                  dodatkowych kosztów.</p>
              </li>

              <li>
                <h3 class="o-heading__size4">Porada konsultanta</h3>
                <p>Nie jesteś pewien czy któraś z części pasuje do Twojego auta? Nie przejmuj się! Dzwoń do nas. Nasz
                  konsultant czeka na Twój telefon. <strong>(45) 123-45-67 </strong></p>
              </li>

            </ul>
          </Tab>
        </Tabs>
      </div>

    )
  }

}

export  default ProductWindow