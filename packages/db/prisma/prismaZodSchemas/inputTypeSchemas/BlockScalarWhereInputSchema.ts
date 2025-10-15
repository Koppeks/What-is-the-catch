import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumBlockKindFilterSchema } from './EnumBlockKindFilterSchema';
import { BlockKindSchema } from './BlockKindSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BlockScalarWhereInputSchema: z.ZodType<Prisma.BlockScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BlockScalarWhereInputSchema), z.lazy(() => BlockScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BlockScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BlockScalarWhereInputSchema), z.lazy(() => BlockScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  documentId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  sectionId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  order: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  kind: z.union([ z.lazy(() => EnumBlockKindFilterSchema), z.lazy(() => BlockKindSchema) ]).optional(),
  level: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  ordinalPath: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  html: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  anchor: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default BlockScalarWhereInputSchema;
