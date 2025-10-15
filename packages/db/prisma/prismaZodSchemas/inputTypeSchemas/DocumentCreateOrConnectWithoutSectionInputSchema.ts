import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentCreateWithoutSectionInputSchema } from './DocumentCreateWithoutSectionInputSchema';
import { DocumentUncheckedCreateWithoutSectionInputSchema } from './DocumentUncheckedCreateWithoutSectionInputSchema';

export const DocumentCreateOrConnectWithoutSectionInputSchema: z.ZodType<Prisma.DocumentCreateOrConnectWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCreateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutSectionInputSchema) ]),
});

export default DocumentCreateOrConnectWithoutSectionInputSchema;
