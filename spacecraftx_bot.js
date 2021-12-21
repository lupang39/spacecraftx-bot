(async () => {
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
  
    while (1) {
      /**
       * ทอง
       */
      const coinCounter = [...document.querySelectorAll("div")].find((div) =>
        [...div.classList].some((className) =>
          className.includes("Header_headerLine")
        )
      );
      const [SCIC, SCID, SCIW] = [...coinCounter.children].map(
        (child) => +child.textContent
      );
  
      /**
       *  รีพลังงาน
       */
      try {
        const energyBtn = [...document.querySelectorAll("div")].find((div) =>
          [...div.classList].some((className) =>
            className.includes("BuyEnergy_buyEnergyText")
          )
        );
        const [energyCurrent, energyMax] = energyBtn.innerText
          .split("/")
          .map(Number);
  
        console.log("!!!", energyCurrent, energyMax, SCIW);
  
        if (energyCurrent < energyMax - 100 && SCIW > 1000) {
          energyBtn.click();
          await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
  
          // Find plus button
          const plusEnergyBtn = [...document.querySelectorAll("div")].find(
            (div) =>
              [...div.classList].some((className) =>
                className.includes("BuyEnergyPopup_buyPlusButton")
              )
          );
  
          for (let i = 0; i < Math.min(SCIW, 10); ++i) {
            plusEnergyBtn.click();
            await new Promise((res) => setTimeout(res, randomInt(1, 3) * 1000));
          }
  
          
          const exchangeEnergyBtn = [...document.querySelectorAll("div")]
            .find(
              (div) =>
                [...div.classList].some((className) =>
                  className.includes("PopupExchangeLayout_popupFooter")
                ) && div.innerText === "EXCHANGE"
            )
            .querySelector("button");
  
          exchangeEnergyBtn.click();
  
          await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
        }
      } catch (e) {
        console.error("Restore energy error", e);
      }
  
      try {
        
        const buttonMine = [...document.querySelectorAll("button")].find(
          (button) =>
            button.innerText === "MINE" &&
            getComputedStyle(button).opacity !== "0.6"
        );
  
        
        if (buttonMine) {
          buttonMine.click();
  
          await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
        }
      } catch (e) {
        console.error("Mine error", e);
      }
  
      /**
       * ซ่อม
       */
      try {
        // 
        const [energyCurrent, energyMax] = [...document.querySelectorAll("div")]
          .find((div) =>
            [...div.classList].find((className) =>
              className.includes("AssetView_assetStatusBar")
            )
          )
          .innerText.split("/");
  
        //  เอาแรงขุคหารค่าซ่อม สามารถปรับเป็น 0.01 ได้ คือ 10%
        if (energyCurrent / energyMax < 0.001) {
          const buttonRepair = [...document.querySelectorAll("button")].find(
            (button) =>
              button.innerText === "REPAIR" &&
              [...button.classList].some((className) =>
                className.includes("Button_default_alternative_button")
              )
          );
  
          await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
  
          // ซ่อม
          buttonRepair.click();
  
          await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
  
          const buttonConfirmRepair = [
            ...document.querySelectorAll("button"),
          ].find(
            (button) =>
              button.innerText === "REPAIR" &&
              [...button.classList].some((className) =>
                className.includes("Button_default_button")
              )
          );
  
          
          buttonConfirmRepair.click();
  
          await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
        }
      } catch (e) {
        console.error("Repair Error", e);
      }
  
      await new Promise((res) => setTimeout(res, randomInt(5, 15) * 1000));
    }
  })();
