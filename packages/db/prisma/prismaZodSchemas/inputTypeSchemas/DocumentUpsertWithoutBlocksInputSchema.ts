import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutBlocksInputSchema } from './DocumentUpdateWithoutBlocksInputSchema';
import { DocumentUncheckedUpdateWithoutBlocksInputSchema } from './DocumentUncheckedUpdateWithoutBlocksInputSchema';
import { DocumentCreateWithoutBlocksInputSchema } from './DocumentCreateWithoutBlocksInputSchema';
import { DocumentUncheckedCreateWithoutBlocksInputSchema } from './DocumentUncheckedCreateWithoutBlocksInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutBlocksInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutBlocksInput> = z.strictObject({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutBlocksInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlocksInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
});

export default DocumentUpsertWithoutBlocksInputSchema;
