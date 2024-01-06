from dataclasses import dataclass, field
from typing import Dict, List, Union

from mage_ai.api.operations.constants import OperationType
from mage_ai.command_center.constants import (
    ApplicationType,
    ButtonActionType,
    InteractionType,
    ItemTagEnum,
    ItemType,
    ObjectType,
)
from mage_ai.command_center.settings import load_settings, save_settings
from mage_ai.data_preparation.models.constants import (
    BlockLanguage,
    BlockType,
    ExecutorType,
    PipelineType,
)
from mage_ai.data_preparation.models.triggers import (
    ScheduleInterval,
    ScheduleStatus,
    ScheduleType,
)
from mage_ai.orchestration.db.models.schedules import PipelineRun
from mage_ai.presenters.interactions.constants import InteractionInputType
from mage_ai.presenters.interactions.models import (
    InteractionInputOption,
    InteractionInputStyle,
)
from mage_ai.shared.hash import merge_dict
from mage_ai.shared.models import BaseDataClass


@dataclass
class CommandCenterBaseClass(BaseDataClass):
    def to_dict(self, ignore_empty: bool = True, **kwargs) -> Dict:
        return super().to_dict(ignore_empty=True, **kwargs)


@dataclass
class TextStyles(CommandCenterBaseClass):
    monospace: bool = False
    regular: bool = False
    small: bool = False


@dataclass
class DisplaySettings(CommandCenterBaseClass):
    color_uuid: str = None
    icon_uuid: str = None
    text_styles: TextStyles = None

    def __post_init__(self):
        self.serialize_attribute_class('text_styles', TextStyles)


@dataclass
class InteractionElement(CommandCenterBaseClass):
    class_name: str = None
    id: str = None


@dataclass
class Interaction(CommandCenterBaseClass):
    type: InteractionType
    element: InteractionElement = None
    options: Dict = None

    def __post_init__(self):
        self.serialize_attribute_class('element', InteractionElement)
        self.serialize_attribute_enum('type', InteractionType)


@dataclass
class Page(CommandCenterBaseClass):
    path: str
    external: bool = False
    open_new_window: bool = False
    parameters: Dict = None
    query: Dict = None


@dataclass
class Request(CommandCenterBaseClass):
    operation: OperationType
    resource: str
    response_resource_key: str
    payload: Dict = None
    query: Dict = None
    resource_id: Union[str, int] = None
    resource_parent: str = None
    resource_parent_id: Union[str, int] = None

    def __post_init__(self):
        self.serialize_attribute_enum('operation', OperationType)


@dataclass
class Action(CommandCenterBaseClass):
    delay: int = None
    interaction: Interaction = None
    page: Page = None
    request: Request = None
    upstream_action_value_key_mapping: Dict = None
    uuid: str = None

    def __post_init__(self):
        self.serialize_attribute_class('interaction', Interaction)
        self.serialize_attribute_class('page', Page)
        self.serialize_attribute_class('request', Request)


@dataclass
class PipelineMetadata(CommandCenterBaseClass):
    blocks: List[Dict] = None
    created_at: str = None
    description: str = None
    name: str = None
    repo_path: str = None
    tags: List[str] = None
    type: PipelineType = None
    updated_at: str = None
    uuid: str = None

    def __post_init__(self):
        self.serialize_attribute_enum('type', PipelineType)


@dataclass
class BlockMetadata(CommandCenterBaseClass):
    file_path: str = None
    language: BlockLanguage = None
    pipelines: List[PipelineMetadata] = None
    type: BlockType = None

    def __post_init__(self):
        self.serialize_attribute_classes('pipelines', PipelineMetadata)
        self.serialize_attribute_enum('language', BlockLanguage)
        self.serialize_attribute_enum('type', BlockType)


@dataclass
class FileMetadata(CommandCenterBaseClass):
    full_path: str
    modified_at: str
    modified_timestamp: int
    size: int
    extension: str = None


@dataclass
class PageMetadata(CommandCenterBaseClass):
    path: str = None
    pathname: str = None
    query: Dict = None
    timestamp: int = None
    title: str = None


@dataclass
class TriggerMetadata(CommandCenterBaseClass):
    description: str = None
    global_data_product_uuid: str = None
    id: int = None
    name: str = None
    pipeline_uuid: str = None
    repo_path: str = None
    schedule_interval: ScheduleInterval = None
    schedule_type: ScheduleType = None
    settings: Dict = None
    sla: str = None
    start_time: str = None
    status: ScheduleStatus = None

    def __post_init__(self):
        self.serialize_attribute_enum('schedule_interval', ScheduleInterval)
        self.serialize_attribute_enum('schedule_type', ScheduleType)
        self.serialize_attribute_enum('status', ScheduleStatus)


@dataclass
class PipelineRunMetadata(CommandCenterBaseClass):
    backfill_id: int = None
    completed_at: str = None
    execution_date: str = None
    execution_partition: str = None
    executor_type: ExecutorType = None
    id: int = None
    metrics: Dict = None
    passed_sla: bool = None
    pipeline_schedule_id: int = None
    pipeline_uuid: str = None
    started_at: str = None
    status: PipelineRun.PipelineRunStatus = None

    def __post_init__(self):
        self.serialize_attribute_enum('executor_type', ExecutorType)
        self.serialize_attribute_enum('status', PipelineRun.PipelineRunStatus)


@dataclass
class Metadata(CommandCenterBaseClass):
    block: BlockMetadata = None
    file: FileMetadata = None
    page: PageMetadata = None
    pipeline: PipelineMetadata = None
    pipeline_run: PipelineRunMetadata = None
    trigger: TriggerMetadata = None

    def __post_init__(self):
        self.serialize_attribute_class('block', BlockMetadata)
        self.serialize_attribute_class('file', FileMetadata)
        self.serialize_attribute_class('page', PageMetadata)
        self.serialize_attribute_class('pipeline', PipelineMetadata)
        self.serialize_attribute_class('pipeline_run', PipelineRunMetadata)
        self.serialize_attribute_class('trigger', TriggerMetadata)


@dataclass
class FormInput(CommandCenterBaseClass):
    action_uuid: str = None
    description: str = None
    display_settings: DisplaySettings = None
    label: str = None
    monospace: bool = False
    name: str = None
    placeholder: str = None
    required: bool = False
    options: List[InteractionInputOption] = None
    style: InteractionInputStyle = None
    type: InteractionInputType = None
    value: str = None

    def __post_init__(self):
        self.serialize_attribute_class('display_settings', DisplaySettings)
        self.serialize_attribute_class('style', InteractionInputStyle)
        self.serialize_attribute_classes('options', InteractionInputOption)
        self.serialize_attribute_enum('type', InteractionInputType)


@dataclass
class Button(CommandCenterBaseClass):
    label: str
    action_types: List[ButtonActionType] = None
    actions: List[Action] = None
    display_settings: DisplaySettings = None
    keyboard_shortcuts: List[List[int]] = None
    tooltip: str = None

    def __post_init__(self):
        self.serialize_attribute_class('display_settings', DisplaySettings)
        self.serialize_attribute_classes('actions', Action)
        self.serialize_attribute_enums('action_types', ButtonActionType)


@dataclass
class Application(CommandCenterBaseClass):
    application_type: ApplicationType
    uuid: str
    actions: List[Action] = None
    buttons: List[Button] = None
    settings: List[Union[FormInput, Dict]] = None

    def __post_init__(self):
        self.serialize_attribute_classes('actions', Action)
        self.serialize_attribute_classes('buttons', Button)
        self.serialize_attribute_enum('application_type', ApplicationType)

        if isinstance(self.settings, list):
            arr = []
            for settings in self.settings:
                if isinstance(settings, dict):
                    if ApplicationType.FORM == self.application_type:
                        arr.append(FormInput.load(**settings))

            self.settings = arr

    def to_dict(self, **kwargs) -> Dict:
        arr = []

        if isinstance(self.settings, list):
            for value in self.settings:
                if isinstance(value, dict):
                    arr.append(value)
                else:
                    arr.append(value.to_dict(**kwargs))

        return merge_dict(
            super().to_dict(**kwargs),
            dict(settings=arr),
        )


@dataclass
class IncludeExclude(CommandCenterBaseClass):
    excludes: List[str] = None
    includes: List[str] = None


@dataclass
class ModelSettings(CommandCenterBaseClass):
    directories: IncludeExclude = None
    projects: IncludeExclude = None

    def __post_init__(self):
        self.serialize_attribute_class('directories', IncludeExclude)
        self.serialize_attribute_class('projects', IncludeExclude)


@dataclass
class HistoryModelSettings(CommandCenterBaseClass):
    size: int = None


@dataclass
class HistorySettings(CommandCenterBaseClass):
    pages: HistoryModelSettings = None
    picks: HistoryModelSettings = None
    searches: HistoryModelSettings = None

    def __post_init__(self):
        self.serialize_attribute_class('pages', HistoryModelSettings)
        self.serialize_attribute_class('picks', HistoryModelSettings)
        self.serialize_attribute_class('searches', HistoryModelSettings)


@dataclass
class KeyboardShortcutsSettings(CommandCenterBaseClass):
    main: List[List[int]] = None


@dataclass
class PositionSettings(CommandCenterBaseClass):
    height: int = None
    width: int = None
    x: int = None
    y: int = None


@dataclass
class InterfaceSettings(CommandCenterBaseClass):
    keyboard_shortcuts: KeyboardShortcutsSettings = None
    position: PositionSettings = None

    def __post_init__(self):
        self.serialize_attribute_class('keyboard_shortcuts', KeyboardShortcutsSettings)
        self.serialize_attribute_class('position', PositionSettings)


@dataclass
class CacheSettings(CommandCenterBaseClass):
    blocks: ModelSettings = None
    files: ModelSettings = None
    pipelines: ModelSettings = None
    triggers: ModelSettings = None

    def __post_init__(self):
        self.serialize_attribute_class('blocks', ModelSettings)
        self.serialize_attribute_class('files', ModelSettings)
        self.serialize_attribute_class('pipelines', ModelSettings)
        self.serialize_attribute_class('triggers', ModelSettings)


@dataclass
class CommandCenterSettings(CommandCenterBaseClass):
    cache: CacheSettings = None
    history: HistorySettings = field(default_factory=lambda: dict(
        pages=dict(size=5),
        picks=dict(size=100),
        searches=dict(size=12),
    ))
    interface: InterfaceSettings = None

    def __post_init__(self):
        self.serialize_attribute_class('cache', CacheSettings)
        self.serialize_attribute_class('history', HistorySettings)
        self.serialize_attribute_class('interface', InterfaceSettings)

    @classmethod
    def load_from_file_path(self, file_path: str = None) -> 'CommandCenterSettings':
        return self.load(**(load_settings(full_path=file_path) or {}))

    def save(self, file_path: str = None):
        save_settings(self.to_dict(), full_path=file_path)


@dataclass
class AttributeDisplaySettings(CommandCenterBaseClass):
    description: DisplaySettings = None
    icon: DisplaySettings = None
    item: DisplaySettings = None

    def __post_init__(self):
        self.serialize_attribute_class('description', DisplaySettings)
        self.serialize_attribute_class('icon', DisplaySettings)
        self.serialize_attribute_class('item', DisplaySettings)


@dataclass
class ItemBase(CommandCenterBaseClass):
    item_type: ItemType
    object_type: ObjectType
    title: str
    uuid: str
    action_results: Dict = None
    actions: List[Action] = None
    applications: List[Application] = None
    display_settings_by_attribute: AttributeDisplaySettings = None
    description: str = None
    items: List[Dict] = None
    metadata: Metadata = None
    tags: List[ItemTagEnum] = None
    score: int = 0

    def __post_init__(self):
        self.serialize_attribute_class('display_settings_by_attribute', AttributeDisplaySettings)
        self.serialize_attribute_class('metadata', Metadata)
        self.serialize_attribute_classes('actions', Action)
        self.serialize_attribute_classes('applications', Application)
        self.serialize_attribute_enum('item_type', ItemType)
        self.serialize_attribute_enum('object_type', ObjectType)
        self.serialize_attribute_enums('tags', ItemTagEnum)


@dataclass
class Item(ItemBase):
    item_type: ItemType
    object_type: ObjectType
    title: str
    uuid: str
    action_results: Dict = None
    actions: List[Action] = None
    applications: List[Application] = None
    display_settings_by_attribute: AttributeDisplaySettings = None
    description: str = None
    items: List[ItemBase] = None
    metadata: Metadata = None
    score: int = 0

    def __post_init__(self):
        super().__post_init__()
        self.serialize_attribute_classes('items', Item)
