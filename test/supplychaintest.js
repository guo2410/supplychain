const supplychain = artifacts.require("./SupplyChain.sol");

//0x6331cBFEab4914Da28a7cFf4e92937004bD8a02e制造商A
//0x20cBC6Ff1AF47B2f9Aa04b2Cb1841919bA7aa89f制造商B
//0x66Df7364a8f253a9d068db8C9E79Bb06Fb03C775供应商C
//0x77324A97f23340546AAA8A8854C2c181a1aaD3B1供应商D

contract('supplychain', async accounts => {

    it("创建两个制造商", async () => {
        let instance = await supplychain.deployed();
        let manufacturerA = await instance.addParticipant(
            "A",
            "郭昌A",
            "0x6331cBFEab4914Da28a7cFf4e92937004bD8a02e",
            "Manufacturer"
        );
           let Participant=await instance.Participants(0);
        // assert.equal(getParticipantA[0], "A")
        // assert.equal(getParticipantA[2], "manufacturer");

        let manufacturerB = await instance.addParticipant(
            "B",
            "passB",
            "0x20cBC6Ff1AF47B2f9Aa04b2Cb1841919bA7aa89f",
            "Manufacturer"
        );
        let Participant2=await instance.Participants(1);
        // assert.equal(getParticipantA[1], "B")
        // assert.equal(getParticipantA[2], "manufacturer");
    });


    it("添加供应商", async () => {
        const instance = await supplychain.deployed();
        let manufacturerC = await instance.addParticipant(
            "C",
            "passC",
            "0x66Df7364a8f253a9d068db8C9E79Bb06Fb03C775",
            "Supplier"
        );

        let manufacturerD = await instance.addParticipant(
            "D",
            "passD",
            "0x77324A97f23340546AAA8A8854C2c181a1aaD3B1",
            "Supplier"
        );
    });


    it("新建商品", async () => {
        const instance = await supplychain.deployed();
        // console.log("=====instance======",instance);
        let productId = await instance.addProduct(
            0,
            "商品1",
            "100",
            "123",
            11
        );
        let pr = await instance.getProduct(0);
        assert.equal(pr[0], "商品1", "=="+pr[0].modelNumber);
    });


    // it("newown", async () => {
    //     let instance = await supplychain.deployed();
    //     await instance.newOwner()
    //     const { methods, events } = new web3.eth.Contract(
    //         instance.contract._jsonInterface,
    //         instance.contract._address
    //     )
    //     const { events: txEvents } = await methods.newOwner(
    //     ).send(
    //         { from: accounts[1], gas: GAS_AMOUNT }
    //     );
    //     assert.equal(txEvents.TransferOwnership.returnValues.productId, 1, "----error----newOwner方法里的事件TransferOwnership记录的产品ID值不等于1")
    // })



})