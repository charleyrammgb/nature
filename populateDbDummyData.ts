import dal from "./dal";

export default function populateDbDummyData() {
    dal.createArea('North Norwich');
    dal.createArea('South Norwich');
    dal.createArea('East Norwich');
    dal.createArea('West Norwich');

    dal.createSite('Whitlingham Broad', dal.findAreaId('East Norwich'));
    dal.createSite('Mousehold Heath', dal.findAreaId('North Norwich'));
    dal.createSite('Plantation Garden', dal.findAreaId('West Norwich'));
    dal.createSite('Eaton Park', dal.findAreaId('West Norwich'));
}