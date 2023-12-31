import { Button, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Dropdown from "../components/Dropdown";
import "./BuyingProcesses.css";

const BuyingProcesses = () => {
  const [step, setStep] = useState(0);

  const [dovizTuru, setDovizTuru] = useState("");
  const [unitPrice, setUnitPrice] = useState(0.0);
  const [created, setCreated] = useState("");
  const [quantity, setQuantity] = useState(0.0);

  const { handleSubmit, reset } = useForm();

  const [unitPrice_altin, setUnitPrice_altin] = useState(0.0);
  const [created_altin, setCreated_altin] = useState("");
  const [quantity_altin, setQuantity_altin] = useState(0.0);

  const clickMainMenu = () => {
    window.location.href = "/";
  };
  const clickMenu = () => {
    window.location.href = "/add";
  };

  const varliklarimaEkle = async (event) => {
    if (dovizTuru === "GRAM" || dovizTuru == "CEYREK") {
      await axios.post("http://localhost:8080/api/v1/altin", {
        tur: dovizTuru,
        unitPrice: unitPrice,
        created: created,
        quantity: quantity,
      });
    } else if (
      dovizTuru === "DOLAR" ||
      dovizTuru === "STERLIN" ||
      dovizTuru === "EURO"
    ) {
      await axios.post(
        "http://localhost:8080/api/v1/doviz",

        {
          tur: dovizTuru,
          unitPrice: unitPrice,
          created: created,
          quantity: quantity,
        }
      );

      clickMenu();
    }
  };

  const showingComponent = () => {
    if (step === 0) {
      return <Dropdown setStep={setStep} setDovizTuru={setDovizTuru} />;
    } else if (step === 1) {
      return (
        <div className="form">
          <div className="card">
            <div className="card-header">
              <Typography
                fontFamily={"EB Garamond"}
                variant="h6"
                component="div"
                fontSize={"26px"}
                paddingBottom={"10px"}
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                EKLE
              </Typography>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit(varliklarimaEkle)}>
                <div className="form-group">
                  <div className="form-items">
                    Ürün Miktarı:
                    <input
                      type="number"
                      placeholder="ürün miktarı giriniz"
                      class="form-control"
                      onChange={(e) =>
                        dovizTuru === "DOLAR" || "EURO" || "STERLIN"
                          ? setQuantity(e.target.value)
                          : setQuantity_altin(e.target.value)
                      } //miktar yazılınca quantity set edilsin
                      name="quantity"
                    ></input>
                  </div>
                  <div className="form-items">
                    Ürün Fiyatı:
                    <input
                      type="number"
                      placeholder="birim fiyatı giriniz"
                      className="form-control"
                      onChange={(e) =>
                        dovizTuru === "DOLAR" || "EURO" || "STERLIN"
                          ? setUnitPrice(e.target.value)
                          : setUnitPrice_altin(e.target.value)
                      } //miktar yazılınca quantity set edilsin
                      name="unitPrice"
                    ></input>
                  </div>
                  <div className="form-items">
                    Alınan Tarih:
                    <input
                      type="text"
                      placeholder="tarih giriniz"
                      className="form-control"
                      onChange={(e) =>
                        dovizTuru === "DOLAR" || "EURO" || "STERLIN"
                          ? setCreated(e.target.value)
                          : setCreated_altin(e.target.value)
                      }
                      name="tarih"
                    ></input>
                  </div>
                </div>
                <Grid container spacing={2} direction="column">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className="btn btn-save btn-block"
                      type="submit"
                    >
                      Varlıklarıma Ekle
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className="dropdown-item"
                      onClick={clickMainMenu}
                    >
                      Ana Sayfa
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      );
    }
  };
  return showingComponent();
};
export default BuyingProcesses;
