import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { EnumTriggerSourceWithAggregatesFilterSchema } from './EnumTriggerSourceWithAggregatesFilterSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { EnumTriggerStateWithAggregatesFilterSchema } from './EnumTriggerStateWithAggregatesFilterSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumSeverityNullableWithAggregatesFilterSchema } from './EnumSeverityNullableWithAggregatesFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const TriggerScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TriggerScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TriggerScalarWhereWithAggregatesInputSchema), z.lazy(() => TriggerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TriggerScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TriggerScalarWhereWithAggregatesInputSchema), z.lazy(() => TriggerScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  patterns: z.lazy(() => StringNullableListFilterSchema).optional(),
  source: z.union([ z.lazy(() => EnumTriggerSourceWithAggregatesFilterSchema), z.lazy(() => TriggerSourceSchema) ]).optional(),
  state: z.union([ z.lazy(() => EnumTriggerStateWithAggregatesFilterSchema), z.lazy(() => TriggerStateSchema) ]).optional(),
  mergedIntoId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  reviewNotes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  promotedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  hitterId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  defaultSeverity: z.union([ z.lazy(() => EnumSeverityNullableWithAggregatesFilterSchema), z.lazy(() => SeveritySchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default TriggerScalarWhereWithAggregatesInputSchema;
