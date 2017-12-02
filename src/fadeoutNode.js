(function(global) {
  class fadeoutNode extends NIN.ShaderNode {
    constructor(id, options) {
      options.inputs = {
        A: new NIN.TextureInput(),
      };
      super(id, options);
    }

    update(frame) {
      this.uniforms.t.value = clamp(0, (frame - FRAME_FOR_BEAN(93 * 12 * 4)) / 40, 1);
      this.uniforms.A.value = this.inputs.A.getValue();
    }
  }

  global.fadeoutNode = fadeoutNode;
})(this);