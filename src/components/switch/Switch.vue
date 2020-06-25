<template>
  <label class="container-switch">
    <input :value="value" @input="onInput" type="checkbox" class="switch-input"/>
    <span v-if="inactiveText" class="switch-inactive" :style="{fontSize: cHeight * 0.7 + 'px'}">{{inactiveText}}</span>
    <span class="switch" :style="myStyle" :class="{'checked': value}"/>
    <span v-if="activeText" class="switch-active" :style="{color: value ? activeColor : '#333',fontSize: cHeight * 0.7 + 'px'}">{{activeText}}</span>
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
        default: '#333'
      },
      activeColor: {
        type: String,
        default: 'green'
      },
      cWidth: {
        type: String,
        default: '100'
      },
      cHeight: {
        type: String,
        default: '50'
      },
      gap: {
        type: String,
        default: '10'
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
        _value: false
      }
    },
    computed: {
      myStyle() {
        return {
          background: this.value && !this.disabled ? this.activeColor : this.inactiveColor,
          width: this.cWidth + 'px',
          height: this.cHeight + 'px',
          borderRadius: this.cHeight / 2 + 'px',
          cursor: this.disabled ? 'not-allowed' : this.value ? 'grabbing' : 'grab',
          '--width': this.cHeight - this.gap * 2 + 'px',
          '--top': this.gap + 'px',
          '--distance': this.cWidth - this.cHeight + 'px',
          '--duration': this.duration + 's',
        }
      }

    },
    created() {
      this._value = this.value
    },
    methods: {
      onInput() {
        if (this.disabled) return
        this._value = !this._value
        this.$emit('input', this._value)
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
    display: block;
    width: 100px;
    height: 50px;
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
