import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumBlockKindWithAggregatesFilterSchema } from './EnumBlockKindWithAggregatesFilterSchema';
import { BlockKindSchema } from './BlockKindSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { JsonNullableWithAggregatesFilterSchema } from './JsonNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BlockScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BlockScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BlockScalarWhereWithAggregatesInputSchema), z.lazy(() => BlockScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlockScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlockScalarWhereWithAggregatesInputSchema), z.lazy(() => BlockScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  sectionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  kind: z.union([ z.lazy(() => EnumBlockKindWithAggregatesFilterSchema), z.lazy(() => BlockKindSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  html: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  anchor: z.lazy(() => JsonNullableWithAggregatesFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default BlockScalarWhereWithAggregatesInputSchema;
