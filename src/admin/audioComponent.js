CMS.registerEditorComponent({
    id: "audioPlayer",
    label: "Audio Player",
    fields: [
        { name: "audioUrl", label: "Audio URL", widget: "string" },
        { name: "title", label: "Title", widget: "string" },
        { name: "subtitle", label: "Subtitle", widget: "string" }
    ],
    pattern: /^<audio src="(.*)" title="(.*)" subtitle="(.*)" controls><\/audio>$/,
    fromBlock: function(match) {
        return {
            audioUrl: match[1],
            title: match[2],
            subtitle: match[3]
        };
    },
    toBlock: function(obj) {
        return `<audio src="${obj.audioUrl}" title="${obj.title}" subtitle="${obj.subtitle}" controls></audio>`;
    },
    toPreview: function(obj) {
        return `
            <div>
                <h3>${obj.title}</h3>
                <h4>${obj.subtitle}</h4>
                <audio src="${obj.audioUrl}" controls>
                    Your browser does not support the audio element.
                </audio>
            </div>
        `.trim();
    }
});
