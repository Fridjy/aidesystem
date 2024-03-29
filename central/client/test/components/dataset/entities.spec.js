import Selectable from '../../../src/components/selectable.vue';
import OdataAnalyze from '../../../src/components/odata/analyze.vue';

import testData from '../../data';
import { load } from '../../util/http';
import { mockLogin } from '../../util/session';


describe('DatasetEntities', () => {
  beforeEach(mockLogin);

  describe('OData modal', () => {
    beforeEach(() => {
      testData.extendedDatasets.createPast(1, { name: 'trees' });
    });

    it('toggles the modal', () =>
      load('/projects/1/entity-lists/trees/entities', { root: false }).testModalToggles({
        modal: OdataAnalyze,
        show: '#odata-data-access-analyze-button',
        hide: '.btn-primary'
      }));

    it('shows the correct URL from entities page', async () => {
      const component = await load('/projects/1/entity-lists/trees/entities', {
        root: false
      });
      const text = component.getComponent(Selectable).text();
      text.should.equal(`${window.location.origin}/v1/projects/1/datasets/trees.svc`);
    });
  });
});
