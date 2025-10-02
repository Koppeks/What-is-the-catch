import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { EnumTriggerSourceFilterSchema } from './EnumTriggerSourceFilterSchema';
import { TriggerSourceSchema } from './TriggerSourceSchema';
import { EnumTriggerStateFilterSchema } from './EnumTriggerStateFilterSchema';
import { TriggerStateSchema } from './TriggerStateSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { EnumSeverityNullableFilterSchema } from './EnumSeverityNullableFilterSchema';
import { SeveritySchema } from './SeveritySchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TriggerScalarWhereInputSchema: z.ZodType<Prisma.TriggerScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TriggerScalarWhereInputSchema), z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TriggerScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TriggerScalarWhereInputSchema), z.lazy(() => TriggerScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  key: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  label: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patterns: z.lazy(() => StringNullableListFilterSchema).optional(),
  source: z.union([ z.lazy(() => EnumTriggerSourceFilterSchema), z.lazy(() => TriggerSourceSchema) ]).optional(),
  state: z.union([ z.lazy(() => EnumTriggerStateFilterSchema), z.lazy(() => TriggerStateSchema) ]).optional(),
  mergedIntoId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  reviewNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  promotedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  clauseCategoryId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  defaultSeverity: z.union([ z.lazy(() => EnumSeverityNullableFilterSchema), z.lazy(() => SeveritySchema) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default TriggerScalarWhereInputSchema;
