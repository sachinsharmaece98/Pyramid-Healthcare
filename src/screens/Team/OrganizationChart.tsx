import React, { useRef, useLayoutEffect } from "react";
import { OrgChart } from 'd3-org-chart';
import * as d3 from 'd3';
import { getSrcImgs } from "../../screens/helper";

const OrganizationChart: React.FC<any> = (props: any) => {
  const divContainer = useRef<HTMLDivElement>(null);
  const chartRef = useRef(new OrgChart());
  console.log('props', props)
  useLayoutEffect(() => {
    if (props.data && divContainer.current) {
      chartRef.current
        .container(divContainer.current)
        .data(props.data)
        .nodeWidth((d) => 200)
        .nodeHeight((d) => 120)
        .onNodeClick((d, i, arr) => {
          props.onNodeClick(d);
        })
        .render();
      chartRef.current.expandAll()
      chartRef.current.fit()

      chartRef.current.linkUpdate((d, i, arr) => {
        d3.select(this)
          .attr("stroke", "blue")
          .attr("stroke-width", 2)
      })
      chartRef.current.nodeContent((node, i, arr, state) => {
        return `
          <div>
          <div class="member-view">
            <img src="${getSrcImgs(node?.data?.emp_avtar)}" height={100} width={"100"} class="user" />
            <div class="name">
              <span>${node?.data?.emp_name}</span>
              <span>~ ${node?.data?.emp_designation}</span>
            </div>
          </div>
        </div>`;

      })
      const chart = d3.select(".svg-chart-container");
      chart.on('.drag', null);
      const svgElement = divContainer?.current?.querySelector("svg");
      console.log("scor", svgElement)
      if (svgElement) {
        const zoomBehavior = d3
          .zoom()
          .scaleExtent([0.8, 3]) // Set minimum and maximum zoom levels
          .on("zoom", (event) => {
            const transform = event.transform;
            const clampedY = Math.max(0, Math.min(transform.y, 100)); // Limit panning in y-axis

            const limitedTransform = d3.zoomIdentity
              .translate(transform.x, clampedY)
              .scale(transform.k);

            d3.select(svgElement).select("g").attr("transform", limitedTransform);
          })

        d3.select(svgElement).call(zoomBehavior);
      }
    }
  }, [props.data, divContainer.current]);


  return <div ref={divContainer} />;
};

export default OrganizationChart;
