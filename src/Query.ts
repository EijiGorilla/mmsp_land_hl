import { dateTable, lotLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "category = 'Land Acquisition HL'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

// For Lot Pie Chart
export const statusLot: string[] = ['Ready for Handover / Handed Over', 'Pending Delivery'];

export const statusLotChartQuery = [
  {
    category: statusLot[0],
    value: 1,
  },
  {
    category: statusLot[1],
    value: 2,
  },
];

export async function generateLotData() {
  var total_acquired_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN H_Level = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_acquired_lot',
    statisticType: 'sum',
  });

  var total_unacquired_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN H_Level = 2 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_unacquired_lot',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_acquired_lot, total_unacquired_lot];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const acquiredLotValue = stats.total_acquired_lot;
    const unacquiredLotValue = stats.total_unacquired_lot;

    const compile = [
      {
        category: statusLot[0],
        value: acquiredLotValue,
        sliceSettings: {
          fill: am5.color('#70ad47'),
        },
      },
      {
        category: statusLot[1],
        value: unacquiredLotValue,
        sliceSettings: {
          fill: am5.color('#FF0000'),
        },
      },
    ];
    return compile;
  });
}

export async function generateLotNumber() {
  var total_lot_number = new StatisticDefinition({
    onStatisticField: 'ID',
    outStatisticFieldName: 'total_lot_number',
    statisticType: 'count',
  });

  var total_lot_pie = new StatisticDefinition({
    onStatisticField: 'CASE WHEN StatusNVS3 >= 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lot_pie',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_lot_number, total_lot_pie];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalLotNumber = stats.total_lot_number;
    const totalLotPie = stats.total_lot_pie;
    return [totalLotNumber, totalLotPie];
  });
}

// For Permit-to-Enter
export async function generateHandedOver() {
  var total_handedover_lot = new StatisticDefinition({
    onStatisticField: 'CASE WHEN HandedOver = 1 THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_handedover_lot',
    statisticType: 'sum',
  });

  var total_lot_N = new StatisticDefinition({
    onStatisticField: 'ID',
    outStatisticFieldName: 'total_lot_N',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_handedover_lot, total_lot_N];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const handedover = stats.total_handedover_lot;
    const totaln = stats.total_lot_N;
    const percent = ((handedover / totaln) * 100).toFixed(0);
    return [percent, handedover];
  });
}

// For monthly progress chart of lot
export async function generateLotProgress(
  yearSelected: any,
  contractp: any,
  landtype: any,
  landsection: any,
) {
  var total_count_handover = new StatisticDefinition({
    onStatisticField: 'HandOverDate',
    outStatisticFieldName: 'total_count_handover',
    statisticType: 'count',
  });
  console.log(yearSelected);
  // let year;
  let years: any;
  years = Number(yearSelected);

  var query = lotLayer.createQuery();
  query.outStatistics = [total_count_handover];
  // eslint-disable-next-line no-useless-concat
  const qStatus = 'HandOverDate IS NOT NULL';
  const qYear = 'HandedOverYear = ' + years;
  const qCP = "Package = '" + contractp + "'";
  const qYearCp = qYear + ' AND ' + qCP;
  const qLandType = "Type = '" + landtype + "'";
  const qCpLandType = qCP + ' AND ' + qLandType;
  const qYearCpLandType = qYear + ' AND ' + qCpLandType;
  const qLandSection = "Station1 ='" + landsection + "'";
  const qCpLandTypeSection = qCpLandType + ' AND ' + qLandSection;
  const qYearCpLandTypeSection = qYear + ' AND ' + qCpLandTypeSection;

  // When year is undefined,
  if (!years && !contractp) {
    query.where = qStatus;
  } else if (!years && contractp && !landtype) {
    query.where = qStatus + ' AND ' + qCP;
  } else if (!years && contractp && landtype && !landsection) {
    query.where = qStatus + ' AND ' + qCpLandType;
  } else if (!years && contractp && landtype && landsection) {
    query.where = qStatus + ' AND ' + qCpLandTypeSection;

    // When year is defined,
  } else if (years && !contractp) {
    query.where = qStatus + ' AND ' + qYear;
  } else if (years && contractp && !landtype && !landsection) {
    query.where = qStatus + ' AND ' + qYearCp;
  } else if (years && contractp && landtype && !landsection) {
    query.where = qStatus + ' AND ' + qYearCpLandType;
  } else if (years && contractp && landtype && landsection) {
    query.where = qStatus + ' AND ' + qYearCpLandTypeSection;
  }

  query.outFields = ['HandOverDate'];
  query.orderByFields = ['HandOverDate'];
  query.groupByFieldsForStatistics = ['HandOverDate'];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.HandOverDate;
      const count = attributes.total_count_handover;

      // compile in object array
      return Object.assign({
        date: date,
        value: count,
      });
    });
    return data;
  });
}

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        //speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}
