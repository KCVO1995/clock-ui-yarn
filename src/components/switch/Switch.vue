<template>
  <label class="container-switch">
    <input :value="value" @input="onInput" type="checkbox" class="switch-input"/>
    <span v-if="inactiveText" class="switch-inactive" :style="{fontSize: sHeight * 0.7 + 'px'}">{{inactiveText}}</span>
    <span class="switch" :style="myStyle" :class="{'checked': value}"/>
    <span v-if="activeText" class="switch-active" :style="{color: value ? activeColor : '#333',fontSize: sHeight * 0.7 + 'px'}">{{activeText}}</span>
  </label>
</template>

<script>
  export default {
    name: 'c-switch',
    props: {
      value: {
        type: Boolean,
        required: true
      },
      inactiveColor: {
        type: String,
        default: '#C0CCDA'
      },
      activeColor: {
        type: String,
        default: '#6cb88b'
      },
      sWidth: {
        type: String,
        default: '40'
      },
      sHeight: {
        type: String,
        default: '20'
      },
      gap: {
        type: String,
        default: '2'
      },
      duration: {
        type: String,
        default: '0.4'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      activeText: {
        type: String,
      },
      inactiveText: {
        type: String
      }
    },
    data() {
      return {
        myValue: false
      }
    },
    computed: {
      myStyle() {
        return {
          background: this.value && !this.disabled ? this.activeColor : this.inactiveColor,
          width: this.sWidth + 'px',
          height: this.sHeight + 'px',
          borderRadius: this.sHeight / 2 + 'px',
          cursor: this.disabled ? 'not-allowed' : this.value ? 'grabbing' : 'grab',
          '--width': this.sHeight - this.gap * 2 + 'px',
          '--top': this.gap + 'px',
          '--distance': this.sWidth - this.sHeight + 'px',
          '--duration': this.duration + 's',
        }
      }

    },
    created() {
      this.myValue = this.value
    },
    methods: {
      onInput() {
        if (this.disabled) return
        this.myValue = !this.myValue
        this.$emit('input', this.myValue)
      }
    }
  }
</script>

<style lang='scss' scoped>
  .container-switch {
    display: flex;
    align-items: center;
    > .switch-active {
      margin-left: 10px;
    }
    > .switch-inactive {
      margin-right: 10px;
      color: #333
    }
  }
  .switch-input {
    width: 0;
    height: 0;
  }
  .switch {
    display: inline-block;
    border-radius: 25px;
    position: relative;
    transition: var(--duration) all;
    &::before {
      position: absolute;
      content: '';
      top: var(--top);
      left: var(--top);
      width: var(--width);
      height: var(--width);
      background: white;
      border-radius: 50%;
      transition: var(--duration) all;
    }
    &.checked {
      &::before {
        transform: translateX(var(--distance));
      }

    }
  }

</style>
