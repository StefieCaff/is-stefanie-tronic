const e={questionBtn:document.querySelector("#question-btn-js"),stickyBtn:document.querySelector("#sticky-btn-js"),planeBtn:document.querySelector("#plane-btn-js"),questionBtnWrapper:document.querySelector(".question-js"),stickyBtnWrapper:document.querySelector(".sticky-js"),planeBtnWrapper:document.querySelector(".plane-js"),plane:document.querySelector("#plane-js"),questionPage:document.querySelector("#question-js"),stickyPage:document.querySelector("#sticky-js")};e.questionBtn.addEventListener("click",(()=>{e.plane.classList.add("hidden"),e.questionBtnWrapper.classList.add("hidden"),e.stickyBtnWrapper.classList.remove("hidden"),e.questionPage.classList.remove("hidden"),console.log("test")})),e.stickyBtn.addEventListener("click",(()=>{e.stickyBtnWrapper.classList.add("hidden"),e.questionPage.classList.add("hidden"),e.planeBtnWrapper.classList.remove("hidden"),e.stickyPage.classList.remove("hidden"),console.log("test two")})),e.planeBtn.addEventListener("click",(()=>{e.planeBtnWrapper.classList.add("hidden"),e.stickyPage.classList.add("hidden"),e.questionBtnWrapper.classList.remove("hidden"),e.plane.classList.remove("hidden"),console.log("test three")}));
//# sourceMappingURL=index.81370766.js.map
