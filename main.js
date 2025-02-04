import $ from 'jquery';
import paper from 'paper';

$(document).ready(() => {
      'use strict';
      paper.install(window);
      paper.setup(document.getElementById('mainCanvas'));

      const tool = new paper.Tool();
      const c = new paper.Path.Circle(new paper.Point(200, 200), 80);
      c.fillColor = 'black';
      const text = new paper.PointText(new paper.Point(200, 200));
      text.justification = 'center';
      text.fillColor = 'white';
      text.fontSize = 20;
      text.content = 'Hello World!';

      tool.onMouseDown = (event) => {
            const c = new paper.Path.Circle(event.point, 10);
            c.fillColor = 'green';
      };

      paper.view.draw();
});