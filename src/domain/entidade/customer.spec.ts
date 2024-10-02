import Customer from "./customer";

describe("Customer unit tests", () => {
  it("should get one as result", () => {
    const result = 1;
    expect(result).toBe(1);
  });

  

  it("should throw error when name is empty", () => {
    expect(() => {
      let customer = new Customer("123","");
    }).toThrowError("Name is required");
  });


  it("should throw error when id is empty", () => {
    expect(() => {
      let customer = new Customer("","teste");
    }).toThrowError("Id is required");
  });

  it("should add reward points", () => {
    let customer = new Customer("1", "Customer 1");

    expect(customer.rewardPoints).toBe(0);
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10); 
    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});