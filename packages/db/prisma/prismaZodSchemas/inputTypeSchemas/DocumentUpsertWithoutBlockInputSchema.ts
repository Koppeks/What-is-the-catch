import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentUpdateWithoutBlockInputSchema } from './DocumentUpdateWithoutBlockInputSchema';
import { DocumentUncheckedUpdateWithoutBlockInputSchema } from './DocumentUncheckedUpdateWithoutBlockInputSchema';
import { DocumentCreateWithoutBlockInputSchema } from './DocumentCreateWithoutBlockInputSchema';
import { DocumentUncheckedCreateWithoutBlockInputSchema } from './DocumentUncheckedCreateWithoutBlockInputSchema';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentUpsertWithoutBlockInputSchema: z.ZodType<Prisma.DocumentUpsertWithoutBlockInput> = z.strictObject({
  update: z.union([ z.lazy(() => DocumentUpdateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutBlockInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlockInputSchema) ]),
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
});

export default DocumentUpsertWithoutBlockInputSchema;
