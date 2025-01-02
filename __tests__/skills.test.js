describe('Skills Module', () => {
    test('should validate skill addition', () => {
        const skills = [];
        const addSkill = (skill) => skills.push(skill);
        addSkill('JavaScript');
        expect(skills).toContain('JavaScript');
    });

    test('should validate skill removal', () => {
        const skills = ['JavaScript'];
        const removeSkill = (skill) => {
            const index = skills.indexOf(skill);
            if (index > -1) {
                skills.splice(index, 1);
            }
        };
        removeSkill('JavaScript');
        expect(skills).not.toContain('JavaScript');
    });
});