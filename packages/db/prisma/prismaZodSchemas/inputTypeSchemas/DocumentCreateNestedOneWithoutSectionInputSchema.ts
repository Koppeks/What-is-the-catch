import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutSectionInputSchema } from './DocumentCreateWithoutSectionInputSchema';
import { DocumentUncheckedCreateWithoutSectionInputSchema } from './DocumentUncheckedCreateWithoutSectionInputSchema';
import { DocumentCreateOrConnectWithoutSectionInputSchema } from './DocumentCreateOrConnectWithoutSectionInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutSectionInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutSectionInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutSectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutSectionInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
});

export default DocumentCreateNestedOneWithoutSectionInputSchema;
