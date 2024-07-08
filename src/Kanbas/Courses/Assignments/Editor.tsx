export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={50} rows={10}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td align="left" valign="top">
                <select id="wd-group">
                    <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="PERCENTAGE">Percentage</option>
                    <option value="LETTER">Letter</option>
                </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="ONLINE">Online</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align ="left">
                <label htmlFor="wd-online-entry-options">Online Entry Options</label>
                <br />
                <input type="checkbox" name="check-text" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="check-website" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" name="check-media" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" name="check-annotation" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" name="check-file" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
                <br />
            </td>
          </tr>
        <tr>
            <td align="left" valign="top">
              <label htmlFor="wd-assign">Assign</label>
              <label htmlFor="wd-assign-to"> Assign to</label>
              <br />
              <input type="text" id="wd-assign-to" placeholder="Everyone"/>
            </td>
        </tr>

        <tr>
            <td align="left" valign="top">
                <label htmlFor="wd-due-date">Due</label>
                <br />
                <input type="date"
                    id="wd-due-date"
                    value="2000-01-21"/>
                    <br />
                    <br/>
            </td>
        </tr>

        <tr>
            <td align="left" valign="top">
                <label htmlFor="wd-available-from">Available from</label>
                <br />
                <input type="date"
                    id="wd-available-from"
                    value="2000-01-21"/>
                    <br />
                    <br/>
            </td>
            <td align="left" valign="top">
                <label htmlFor="wd-available-until">Until</label>
                <br />
                <input type="date"
                    id="wd-available-until"
                    value="2000-01-21"/>
                    <br />
                    <br/>
            </td>
        </tr>
        <tr>
            <td align="right" valign="top">
                <hr />
                <button>Cancel</button>
                <button>Save</button>
            </td>
        </tr>
        </table>
      </div>
  );}
  