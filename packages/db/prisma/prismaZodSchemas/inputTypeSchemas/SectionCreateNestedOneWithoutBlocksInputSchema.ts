import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SectionCreateWithoutBlocksInputSchema } from './SectionCreateWithoutBlocksInputSchema';
import { SectionUncheckedCreateWithoutBlocksInputSchema } from './SectionUncheckedCreateWithoutBlocksInputSchema';
import { SectionCreateOrConnectWithoutBlocksInputSchema } from './SectionCreateOrConnectWithoutBlocksInputSchema';
import { SectionWhereUniqueInputSchema } from './SectionWhereUniqueInputSchema';

export const SectionCreateNestedOneWithoutBlocksInputSchema: z.ZodType<Prisma.SectionCreateNestedOneWithoutBlocksInput> = z.strictObject({
  create: z.union([ z.lazy(() => SectionCreateWithoutBlocksInputSchema), z.lazy(() => SectionUncheckedCreateWithoutBlocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SectionCreateOrConnectWithoutBlocksInputSchema).optional(),
  connect: z.lazy(() => SectionWhereUniqueInputSchema).optional(),
});

export default SectionCreateNestedOneWithoutBlocksInputSchema;
