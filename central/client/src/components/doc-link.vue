<!--
Copyright 2017 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/getodk/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
-->
<template>
  <a :href="href" target="_blank"><slot></slot></a>
</template>

<script>
export default {
  name: 'DocLink',
  props: {
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    href() {
      return `https://care.org/${this.to}`;
    }
  }
};
</script>
