import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutBlockInputSchema } from './DocumentCreateWithoutBlockInputSchema';
import { DocumentUncheckedCreateWithoutBlockInputSchema } from './DocumentUncheckedCreateWithoutBlockInputSchema';
import { DocumentCreateOrConnectWithoutBlockInputSchema } from './DocumentCreateOrConnectWithoutBlockInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedOneWithoutBlockInputSchema: z.ZodType<Prisma.DocumentCreateNestedOneWithoutBlockInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlockInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlockInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutBlockInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
});

export default DocumentCreateNestedOneWithoutBlockInputSchema;
